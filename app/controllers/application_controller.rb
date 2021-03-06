class ApplicationController < ActionController::Base
  before_action :authenticate_user!
  before_action :configure_devise, if: :devise_controller?

  private

  def configure_devise
    devise_parameter_sanitizer.permit(:account_update, keys: [ :first_name, :last_name, :username, :education, :location, :description, photos: [] ])
  end

end
