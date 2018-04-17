angular.module('wm.quill', [])

.component('wmQuill', {

    scope: {
        onInit: '&'
    },

    controller: ['$element', 'QuillConfig', function ($element, QuillConfig) {
        
        var vm, editor;

        editor = vm.editor = new Quill($element[0], QuillConfig);
    }]

})

.value('QuillConfig', {

})