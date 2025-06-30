class Post < ApplicationRecord
  belongs_to :user
  has_one_attached :image  # ← ここで画像を1枚だけ添付できるように
end