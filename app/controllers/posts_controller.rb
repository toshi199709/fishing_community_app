class PostsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  before_action :set_post, only: [:show, :edit, :update, :destroy]

def index
  @posts = Post.includes(:user, image_attachment: :blob).order(created_at: :desc)

  @globe_data = Post
    .with_attached_image
    .where.not(latitude: nil, longitude: nil)
    .limit(2)
    .map do |post|
      {
        lat: post.latitude,
        lng: post.longitude,
        url: Rails.application.routes.url_helpers.post_path(post, host: request.base_url)
      }
    end
end




  def show
  end

  def new
    @post = Post.new
  end

  def create
    @post = current_user.posts.build(post_params)
    if @post.save
      redirect_to posts_path, notice: "投稿が完了しました"
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    redirect_to root_path unless @post.user == current_user
  end

  def update
    if @post.update(post_params)
      redirect_to posts_path, notice: "投稿を更新しました"
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    if @post.user == current_user
      @post.destroy
      redirect_to posts_path, notice: "投稿を削除しました"
    else
      redirect_to posts_path, alert: "権限がありません"
    end
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:text, :image, :latitude, :longitude)
  end
end
