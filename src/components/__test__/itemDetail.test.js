import React from 'react';
import {mount, unmount} from 'enzyme';
import ItemDetail from '../itemDetail';
import Root from '../root';


describe('ItemDetail tests ', () => {

    let wrapped;

    describe('comics case  ', () =>{
        beforeEach(()=>{
            let props = {"itemDetail":{
                "match":{"params": {"type":"comics" , "id":75421 }},
                "title":"the comic 123",
                "type": "comics",
                "description": "this is a fack comics",
                "images": [{"path": "http//img/7487947", "extension": "jpg" }]
            } }
            wrapped = mount(
                <Root>
                    <ItemDetail {...props} />
                </Root>);
        });
        afterEach(()=>{
            wrapped.unmount();
        })
        it('has a image, a title, a description ', () => {
            expect(wrapped.find('img').length).toEqual(1);
        });
    });


});