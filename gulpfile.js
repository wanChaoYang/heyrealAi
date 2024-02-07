var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch'),
    del = require('del'),
    gutil = require('gulp-util');
    babel = require("gulp-babel");
    sourceMap = require('gulp-sourcemaps'),
    plugins = require('gulp-load-plugins')(),
    autoPrefixer = require('gulp-autoprefixer');
    var file={
        // "author-index":{
        //     "css":['css/category-common.css','css/footer.css','css/author-index.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/header.js','js/author.js']
        // },
        // "author":{
        //     "css":['css/category-common.css','css/author.css','css/footer.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/header.js','js/author.js']
        // },
        // "article":{
        //     "css":['css/article-new.css'],
        //     "js":['js/jquery.min.js','js/common-article.js']
        // },
        // "article-v1":{
        //     "css":['css/article.css'],
        //     "js":[]
        // },
        // "category":{
        //     "css":['css/category-common.css','css/footer.css','css/category-new.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/category.js']
        // },
        // "special-gotd":{
        //     "css":['style/gotd-header.css','special/gotd/css/gotd.css'],
        //     "js":['js/jquery.min.js','js/header.js','js/common-gotd.js','js/paddle.js']
        // },
        // "total-video-converter":{
        //     "css":['css/product/product-common.css','css/product-new.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        "whatsapp-transfer":{
            "css":['css/product/product-common.css','css/product-new.css','css/product/whatsapp-transfer.css'],
            "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/whatsapp-transfer.js','js/paddle.js']
        },
        // "phone-mirror":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/product/phone-mirror.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "blu-ray-player":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/blu-ray-player.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "iphone-cleaner":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/iphone-cleaner.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "fonelab-for-android":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/fonelab-for-android.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js','js/fonelab-for-android.js']
        // },
        // "broken-android-data-recovery":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/broken-android-data-recovery.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js','js/broken-android-data-recovery.js']
        // },
        // "hd-video-converter":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/hd-video-converter.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "hd-video-converter-for-mac":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/hd-video-converter-for-mac.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "audio-converter-for-mac":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/audio-converter-for-mac.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "4k-converter":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/4k-converter.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "4k-converter-for-mac":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/4k-converter-for-mac.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "mac-video-enhancer":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/mac-video-enhancer.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "mov-converter":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/mov-converter.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "pdf-to-excel-converter":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/pdf-to-excel-converter.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "mxf-converter":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/mxf-converter.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "mxf-converter-for-mac":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/mxf-converter-for-mac.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "mp4-converter":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/mp4-converter.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "iphone-data-eraser":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/iphone-data-eraser.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "powerpoint-to-video-dvd-converter":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/powerpoint-to-video-dvd-converter.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "pdf-to-epub-converter":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/pdf-to-epub-converter.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "mac-pdf-to-epub-converter":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/mac-pdf-to-epub-converter.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "mts-converter":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/mts-converter.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "mkv-converter":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/mkv-converter.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "mod-converter-for-mac":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/mod-converter-for-mac.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "video-enhancer":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/video-enhancer.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "3d-converter":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/3d-converter.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "video-repair":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/video-repair.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "audio-converter":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/product/audio-converter.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "iphone-ringtone-maker":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/product/iphone-ringtone-maker.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "video-converter-for-mac":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/video-converter-for-mac.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "video-converter-ultimate":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/product/video-converter-ultimate.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js','js/vcu.js']
        // },
        // "screen-recorder":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/product/screen-recorder.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js','js/screen-recorder.js']
        // },
        // "burnova":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/burnova.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "android-data-backup-and-restore":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/android-data-backup-and-restore.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "location-changer":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/location-changer.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "iphone-password-manager":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/iphone-password-manager.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "free-online-video-joiner":{
        //     "css":['css/global.css','css/footer.css','css/free-online-video-joiner.css'],
        //     "js":['js/jquery.min.js','js/sizzle.js','style/js/unslider.js','js/common.js','js/translation.js','js/online-pro.js','js/free-online-video-joiner.js']
        // },
        // "mp4-converter-for-mac":{
        //     "css":['style/new-navigation-index.css','css/product/product-common.css','css/product-new.css','css/app-store.css'],
        //     "js":['js/jquery.min.js','js/header.js']
        // },
        // "mp3-converter":{
        //     "css":['style/new-navigation-index.css','css/product/product-common.css','css/product-new.css','css/app-store.css','css/mp3-converter.css'],
        //     "js":['js/jquery.min.js','js/header.js']
        // },
        // "free-online-image-converter":{
        //     "css":['/css/global.css','/css/online.css','css/product/product-common.css','css/product-new.css','css/free-online-image-converter.css'],
        //     "js":['js/jquery.min.js','js/sizzle.js','js/common.js','style/js/unslider.js','js/product-new.js','js/translation.js','js/online-pro.js','js/free-online-image-converter.js']
        // },
        // "photo-restoration-online-free":{
        //     "css":['/css/global.css','css/product/product-common.css','css/product-new.css','css/photo-restoration-online-free.css'],
        //     "js":['js/jquery.min.js','js/sizzle.js','js/common.js','style/js/unslider.js','js/product-new.js','js/translation.js','js/online-pro.js','js/photo-restoration-online-free.js']
        // },
        // "video-editor":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/video-editor.css','css/close_unslider.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "free-pdf-jpg-converter-online":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/free-pdf-jpg-converter-online.css'],
        //     "js":['js/jquery.min.js','js/sizzle.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/translation.js','js/free-pdf-jpg-converter-online.js']
        // },
        // "free-pdf-png-converter-online":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/free-pdf-png-converter-online.css'],
        //     "js":['js/jquery.min.js','js/sizzle.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/translation.js','js/free-pdf-jpg-converter-online.js']
        // },
        // "free-jpg-word-converter-online":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/free-jpg-word-converter-online.css'],
        //     "js":['js/jquery.min.js','js/sizzle.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/translation.js','js/free-pdf-jpg-converter-online.js']
        // },
        // "video-enhancer":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/video-enhancer.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "blu-ray-creator":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/blu-ray-creator.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "free-heic-converter":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/free-heic-converter.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "dvd-creator":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/dvd-creator.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "dvd-creator-for-mac":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/dvd-creator-for-mac.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "mac-video-converter-ultimate":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/mac-video-converter-ultimate.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "pdf-converter-ultimate":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/pdf-converter-ultimate.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "slideshow-creator":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/product/slideshow-creator.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js','js/slideshow-creator.js']
        // },
        // "iphone-data-recovery":{
        //     "css":['css/product.css','css/product/product-common.css','css/product-new.css','css/product/iphone-data-recovery.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/iphone-data-recovery.js']
        // },
        // "mac-iphone-data-recovery":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/product/mac-iphone-data-recovery.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/iphone-data-recovery.js']
        // },
        // "ios-system-recovery":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/product/ios-system-recovery.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/ios-system-recovery.js']
        // },
        // "ios-transfer":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/product/ios-transfer.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js','js/ios-transfer.js']
        // },
        // "whatsapp-transfer-for-ios":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/product/whatsapp-transfer-for-ios.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/product-whatsapp-transfer-for-ios.js']
        // },
        // "ios-data-backup-and-restore":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/product/ios-data-backup-and-restore.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/product-ios-data-backup-and-restore.js']
        // },
        // "data-recovery":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/product/data-recovery.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js','js/data-recovery.js']
        // },
        // "mac-cleaner":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/product/mac-cleaner.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js','js/mac-cleaner.js']
        // },
        // "mobiesync":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/mobiesync.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js','js/mobiesync.js']
        // },
        // "iphone-unlocker":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/product/iphone-unlocker.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js','js/iphone-unlocker.js']
        // },
        // "mp4-video-converter":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/mp4-video-converter.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "install":{
        //     "css":['css/common.css','css/install.css'],
        //     "js":['js/jquery.min.js','js/header.js','js/paddle.js','js/install.js']
        // },
        // "install-new":{
        //     "css":['css/common.css','css/install-new.css','css/new-install.css','css/install.css'],
        //     "js":['js/jquery.min.js','js/header.js','js/paddle.js','js/install-new.js','js/order-iphone-cleaner.js','style/js/switch.js','js/install.js']
        // },
        // "register":{
        //     "css":['css/common.css','css/register.css'],
        //     "js":['js/jquery.min.js','js/header.js','js/paddle.js']
        // },
        // "new-install":{
        //     "css":['css/common.css','css/install.css','css/new-install.css'],
        //     "js":['js/jquery.min.js','js/header.js','js/paddle.js','js/order-iphone-cleaner.js','style/js/switch.js','js/install.js']
        // },
        // "payment-succeeded":{
        //     "css":['css/common.css','css/payment-succeeded.css'],
        //     "js":['js/jquery.min.js','js/header.js','js/payment-succeeded.js','js/paddle.js']
        // },
        // "order-iphone-cleaner":{
        //     "css":['css/common.css','css/order-iphone-cleaner.css'],
        //     "js":['js/jquery.min.js','js/header.js','js/order-iphone-cleaner.js','style/js/switch.js','js/paddle.js']
        // },
        // "order-anycoord":{
        //     "css":['css/common.css','css/order-anycoord.css'],
        //     "js":['js/jquery.min.js','js/header.js','js/order-anycoord.js','js/paddle.js']
        // },
        // "order-mac-cleaner":{
        //     "css":['css/common.css','css/order-mac-cleaner.css'],
        //     "js":['js/jquery.min.js','js/header.js','js/paddle.js','js/order-mac-cleaner.js']
        // },
        // "order-data-recovery":{
        //     "css":['css/common.css','css/order-data-recovery.css'],
        //     "js":['js/jquery.min.js','js/header.js','js/paddle.js']
        // },
        // "order-vcu":{
        //     "css":['css/common.css','css/order-vcu.css'],
        //     "js":['js/jquery.min.js','js/header.js','js/paddle.js']
        // },
        // "error":{
        //     "css":['style/new-navigation-index.css','css/error.css','css/footer.css'],
        //     "js":['js/jquery.min.js','js/header.js','style/js/unslider.js','js/product-common.js','js/error.js']
        // },
        // "mac-ios-transfer":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/product/mac-ios-transfer.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js','js/product-mac-ios-transfer.js']
        // },
        // "mac-pdf-converter-ultimate":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/mac-pdf-converter-ultimate.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "install-uninstall-new":{
        //     "css":['style/new-navigation-index.css','css/footer.css','style/install-unstall-new.css'],
        //     "js":['js/jquery.min.js','js/header.js','js/paddle.js','js/uninstall.js']
        // },
        // "upgrade":{
        //     "css":['style/new-navigation-index.css','css/footer.css','css/upgrade.css'],
        //     "js":['js/jquery.min.js','js/header.js','js/paddle.js','js/upgrade.js']
        // },
        // "support":{
        //     "css":['style/new-navigation-index.css','css/footer.css','css/support.css'],
        //     "js":['js/jquery.min.js','js/header.js','style/js/unslider.js','js/product-common.js']
        // },
        // "tutorial":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/tutorial.css'],
        //     "js":['js/jquery.min.js','js/product-common.js','js/fancybox-2.0.1.js','js/tutorial.js']
        // },
        // "tutorial-system":{
        //     "css":[],
        //     "js":['js/jquery.min.js','js/product-common.js','js/fancybox-2.0.1.js','js/tutorial-system.js']
        // },
        // "purchase-v1":{
        //     "css":[],
        //     "js":['js/jquery.min.js','js/paddle.js','js/purchase-v1.js']
        // },
        // "ai-photo-editor":{
        //     "css":['css/product/product-common.css','css/product-new.css','css/ai-photo-editor.css'],
        //     "js":['js/jquery.min.js','style/js/unslider.js','js/product-common.js','js/product-new.js','js/paddle.js']
        // },
        // "purchase-v2":{
        //     "css":['css/common.css','css/purchase-v2.css'],
        //     "js":['js/jquery.min.js','js/header.js','js/paddle.js','js/order-mac-cleaner.js','js/purchase-v2.js']
        // },
    }
    //压缩css，在cmd中输入gulp minifycss后，执行的就是这个命令
    gulp.task('minifycss', function() {
        for(var name in file){
            gulp.src(file[name]['css'])
                .pipe(plugins.autoprefixer({
                    overrideBrowserslist: ['last 2 versions','Android >= 5.0'],
                    cascade: true,
                    remove: true
                }))
                .pipe(concat(name+'.css'))
                .pipe(gulp.dest('css-new'))
                .pipe(rename({suffix: ''}))
                .pipe(minifycss())
                .pipe(gulp.dest('css-new'));
        }
    });
    // 压缩js，在cmd中输入gulp minifyjs后，执行的就是这个命令
    gulp.task('minifyjs', function() {
        for(var name in file){
            gulp.src(file[name]['js'])
                .pipe(sourceMap.init())
                .pipe(sourceMap.identityMap())
                .pipe(concat(name+'.js'))
                .pipe(gulp.dest('js-new'))
                .pipe(rename({suffix: ''}))
                .pipe(babel())
                .pipe(uglify())
                .on('error', function(err) {
                    gutil.log(gutil.colors.red('[Error]'), err.toString());
                })
                .pipe(sourceMap.write('./maps/',{addComment: true}) )
                .pipe(gulp.dest('js-new'));
        }
    });
    //执行压缩前，先删除文件夹里的内容
    gulp.task('clean', function() {
        del('css-new');
        del('js-new');
    });
    // watch
    gulp.task('watch',function(){
        gulp.watch('css/*.css',['minifycss']);
        gulp.watch('style/*.css',['minifycss']);
        gulp.watch('css/product/*.css',['minifycss']);
        gulp.watch('js/*.js',['minifyjs']);
        gulp.watch('style/*.js',['minifyjs']);
    });
    //默认命令，在cmd中输入gulp后，执行的就是这个命令
    gulp.task('default', ['minifycss','minifyjs','watch']);