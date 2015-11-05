module.exports = {
    options: {
        "standalone": true,
        "jar_url": 'http://selenium-release.storage.googleapis.com/2.44/selenium-server-standalone-2.44.0.jar',
        // "custom_assertions_path": 'test/custom_assertions',
        "src_folders": ["test/functional"],
        "page_objects_path": "test/functional/page_objects",
        "output_folder": "reports",
        "selenium": {
            "start_process": true,
            "log_path": "reports"
        },
        "test_settings": {
            "default": {
                "silent": true,
                "desiredCapabilities": {
                    "browserName": "chrome",
                    "javascriptEnabled": true,
                    "acceptSslCerts": true
                }
            }
        }
    }
};
