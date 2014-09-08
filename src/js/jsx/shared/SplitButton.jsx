/** @jsx React.DOM */
/*
 * Copyright (c) 2014 Adobe Systems Incorporated. All rights reserved.
 *  
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"), 
 * to deal in the Software without restriction, including without limitation 
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, 
 * and/or sell copies of the Software, and to permit persons to whom the 
 * Software is furnished to do so, subject to the following conditions:
 *  
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *  
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
 * DEALINGS IN THE SOFTWARE.
 * 
 */
 
define(function (require, exports, module) {
    "use strict";

    var React = require("react");

    var SplitButton = React.createClass({

        render: function () {

            var _itemNumberToClass = {
                "2": "c-12-25",
                "3": "c-12-25",
                "4": "c-16-25"
            };

            var selectedItem = this.props.selected;

            var items = this.props.items.split(",");
            var buttons = items.map(function (name, i) {
                var selected = selectedItem === "mixed" ? "mixed" : name === selectedItem;
                return (<li data-selected={selected} id={name} key={i}/>);
            });

            return this.transferPropsTo(
                    <ul className={_itemNumberToClass[items.length] + " button-radio"} onClick={this.onClick}>
                        {buttons}
                    </ul>
                );
        }
    });

    module.exports = SplitButton;
});