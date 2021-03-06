/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import ShareQRCode from '../ShareQRCode';
import ReactTestUtils from 'react-dom/test-utils';

describe("The ShareQRCode component", () => {
    beforeEach((done) => {
        document.body.innerHTML = '<div id="container"></div>';
        setTimeout(done);
    });

    afterEach((done) => {
        ReactDOM.unmountComponentAtNode(document.getElementById("container"));
        document.body.innerHTML = '';
        setTimeout(done);
    });

    it('is created with defaults', () => {
        const cmpShareQRCode = ReactDOM.render(<ShareQRCode shareUrl="www.geo-solutions.it"/>, document.getElementById("container"));
        expect(cmpShareQRCode).toExist();
    });

    it('should contain the canvas of the QRCode', () => {
        const cmpShareQRCode = ReactDOM.render(<ShareQRCode shareUrl="www.geo-solutions.it"/>, document.getElementById("container"));
        expect(cmpShareQRCode).toExist();

        const canvasQRCode = ReactDOM.findDOMNode(ReactTestUtils.scryRenderedDOMComponentsWithTag(cmpShareQRCode, "canvas")[0]);
        expect(canvasQRCode).toExist();
    });


});
