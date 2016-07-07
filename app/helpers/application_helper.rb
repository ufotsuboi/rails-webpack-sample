module ApplicationHelper
  def css_load_tag(file_name)
    if Rails.env.development?
      javascript_include_tag webpack_dev_server_path("#{file_name}.js")
    else
      stylesheet_link_tag assets_path("#{file_name}.css")
    end
  end

  def assets_path(path)
    return webpack_dev_server_path(path) if Rails.env.development?
    manifest = Rails.application.config.assets_manifest
    path = manifest[path] if manifest && manifest[path].present?
    "/dist/#{path}"
  end

  private
  def webpack_dev_server_path(path)
    "http://localhost:8080/#{path}"
  end
end
