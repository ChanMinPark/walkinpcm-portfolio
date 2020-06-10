/**
 * @name vue-global-custom-alert  
 * @author ChanMin Park <walkinpcm@gmail.com>  
 * 
 * @description The Vue.js plugin of a custom alert. It make a custom Vue.js component a global alert.  
 * ## Feature  
 * - Support a custom vue.js components.
 * - Get result by promise.
 * - Multiple alert elements.
 * - Work on client-side only.
 */

import Vue from 'vue'
import CustomAlert from '~/components/GlobalAlert'

const pluginOptions = {
  component: CustomAlert
}

// Register the plugin.
Vue.use({
  // Write a plugin of 'Vue Global Custom Alert'
  install: function (argVue, options) {
    // Alert Array
    let alertArr = []

    // Add instance methods
    if (window) {
      argVue.prototype.$globalAlert = {
        /**
         * appear
         * @description appear alert component
         * @function
         * @param {*} compProps props data for a custom alert component.
         */
        appear: function (
          compProps = {}
        ) {
          return new Promise((resolve, reject) => {
            // create element for alert component
            const alertEl = document.createElement('div')
            alertEl.setAttribute('id', `el-alert-${alertArr.length}`)
    
            // get 'body' element
            const bodyEl = (document.getElementsByTagName('body'))[0]
            bodyEl.appendChild(alertEl)
            
            // reference: https://forum.vuejs.org/t/add-component-to-dom-programatically/7308/3
            // reference: https://kr.vuejs.org/v2/api/index.html#vm-mount
            const ComponentCtor = Vue.extend(options.component)
            const componentInstance = new ComponentCtor({ propsData: {
              ...compProps
            } })
            componentInstance.$on('resolve', (result) => {
              resolve(result)
            })
            componentInstance.$mount(`#el-alert-${alertArr.length}`)
    
            alertArr.push(componentInstance)
          })
        },

        /**
         * disappear
         * @description disappear alert component
         * @function
         * @param {*} instance the component that would be removed from DOM.
         */
        disappear: function (instance = undefined) {
          if (instance) {
          // The case that pass a instance object by argument.
            const removeInstance = alertArr.find(item => {
              return item._uid === instance._uid
            })
            const removeInstanceIndex = alertArr.indexOf(removeInstance)
            if (removeInstanceIndex > -1) {
              alertArr.splice(removeInstanceIndex, 1)
            }

            instance.$el.parentNode.removeChild(instance.$el)
            instance.$destroy()
          } else {
          // The case that didn't pass a instance object by argument. then destroy last instance at alertArr.
            if (alertArr.length > 0) {
              const lastInstance = alertArr.pop()
              lastInstance.$el.parentNode.removeChild(lastInstance.$el)
              lastInstance.$destroy()
            }
          }
        }
      }
    } else {
      argVue.prototype.$globalAlert = {
        appear: function () {},
        disappear: function () {},
      }
    }
  }
}, pluginOptions)

// Pass a custom alert component into plugin by using pluginOptions. then The plugin can use a component.