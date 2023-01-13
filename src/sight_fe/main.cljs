(ns sight-fe.main
  (:require [goog.dom :as gdom]
            [reagent.core :as r]))

; before it was (js/console.log "false")

(def app-el (gdom/getElement "app"))

(defn ^:dev/after-load start []
  (js/console.log "start"))

;; ;; optional
(defn ^:dev/before-load stop []
  (js/console.log "stop"))


(js/console.log app-el)