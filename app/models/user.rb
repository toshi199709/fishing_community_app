class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end

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
