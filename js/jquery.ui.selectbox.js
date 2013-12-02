(function ($) {
    $.widget('ui.selectbox', {
        'options': {
            icon: '<i class="icon-caret-down"></i>',
            value: null
        },
        '_create': function () {
            var self = this;

            this.element.addClass('selectbox');

            this.dropdown = $('<div class="selectbox-dropdown"></div>').append(this.element.children().clone()).insertAfter(this.element).position({
                'my': 'left top',
                'at': 'left bottom',
                'of': this.element
            });

            this.label = $('<div class="selectbox-label"></div>').prependTo(this.element);

            this.field = $('<input type="hidden" />').appendTo(this.element);

            if (this.element.attr('name')) {
                this.field.attr('name', this.element.attr('name'));

                this.element.removeAttr('name');
            }

            this._setValue(this.options.value);

            $('html').click(function (e) {
                var target = $(e.target);

                if (target[0] === self.label[0] || target.parent()[0] === self.label[0]) {
                    self.dropdown.toggle();

                    return;
                }

                if (target.parent()[0] === self.dropdown[0]) {
                    self.options.value = target.attr('value');

                    self._setValue(target.attr('value'));
                }

                self.dropdown.hide();
            });
        },
        '_setOption': function (key, value) {
            if (key === 'value') {
                this._setValue(value);
            }

            this._super(key, value);
        },
        '_setValue': function (value) {
            var selected;

            if (value) {
                selected = this.dropdown.children('[value="' + value + '"]');
            } else {
                selected = this.dropdown.children().first();
            }

            if (selected.length !== 1) {
                return;
            }

            this.field.val(value);

            this.label.html(selected.text() + this.options.icon);
        }
    });
}(jQuery));