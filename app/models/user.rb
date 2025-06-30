class User < ApplicationRecord
  # Devise モジュール
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  # 投稿とのアソシエーション
  has_many :posts, dependent: :destroy

  def email_required?
    false
  end

  def email_changed?
    false
  end

  def self.find_for_database_authentication(warden_conditions)
    conditions = warden_conditions.dup
    if nickname = conditions.delete(:nickname)
      where(conditions.to_h).where(["lower(nickname) = :value", { value: nickname.downcase }]).first
    else
      where(conditions.to_h).first
    end
  end
end
