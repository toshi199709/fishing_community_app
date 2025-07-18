# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
pin "map_index", to: "map_index.js"
pin "three/examples/jsm/renderers/CSS2DRenderer.js", to: "three--examples--jsm--renderers--CSS2DRenderer.js.js" # @0.178.0
