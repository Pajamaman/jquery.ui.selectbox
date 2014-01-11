This plugin serves as a replacement for native browser select elements because they are hard to style. The markup is not very different from a normal select element. For example, this:

    <select id="custard-preference" name="custard-preference">
        <option>Select one...</option>
        <option value="0">No custard</option>
        <option value="1">Some custard</option>
        <option value="2">Boat loads of custard</option>
    </select>

Becomes this:

    <div id="custard-preference" name="custard-preference">
        <div>Select one...</div>
        <div value="0">No custard</div>
        <div value="1">Some custard</div>
        <div value="2">Boat loads of custard</div>
    </div>

With a simple call to the selectbox function:

    $('#custard-preference').selectbox();

### Options

#### icon

Type: String  
Default: `<i class="icon-caret-down"></i>`

By default it will use an icon from [Font Awesome](http://fontawesome.io/) version 3.2.1, but you can use jQuery UI icons, single characters, or whatever you want:

    $('.select').selectbox({ icon: '<span class="ui-icon ui-icon-circle-triangle-s"></span>' });

#### value

Type: String  
Default: null

The default selected value will be the first entry in the selectbox. For instance, if your markup looks like this:

    <div id="beard-length" name="beard-length">
        <div>Select beard length...</div>
        <div value="0">None</div>
        <div value="1">Short</div>
        <div value="2">Medium</div>
        <div value="3">Long</div>
    </div>

And you call selectbox like this (without passing a value):

    $('#beard-length').selectbox();

Then the default selected value will be "Select beard length...". If you want to select Short by default you would call selectbox like this:

    $('#beard-length').selectbox({ value: '1' });

### To-do

* I don't know if the value attribute is valid on a div element, or if I need to use something else there. The same goes for the name attribute.
* So far, I've only tested in Firefox 17.
