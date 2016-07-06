Rails.application.config.assets_manifest =
  if File.exist?(Rails.root.join('public', 'dist', 'manifest.json'))
    JSON.parse(File.read(Rails.root.join('public', 'dist', 'manifest.json')))
  end
