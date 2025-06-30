require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module FishingCommunityApp
  class Application < Rails::Application
    config.load_defaults 7.1

    config.application_name = "FishTrail"  # ✅ これを追加（任意）
  end
end

