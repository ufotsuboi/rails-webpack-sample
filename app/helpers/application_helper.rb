module ApplicationHelper
  def assets_path(path)
    return "http://localhost:8080/#{path}" if Rails.env.development?
    manifest = Rails.application.config.assets_manifest
    path = manifest[path] if manifest && manifest[path].present?
    "/dist/#{path}"
  end
end
