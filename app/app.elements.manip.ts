import { AfterViewChecked } from '@angular/core';


export class ElementsManipulation implements AfterViewChecked {

    passwordShowHide: boolean = true;

    layoutInstruction: any = [
        { 'id': 'firstName', 'visible': true, 'remove': false, 'index': '1', 'onFocus': true },
        { 'id': 'email', 'visible': true, 'remove': false, 'index': '2', 'onFocus': false },
        {
            'id': 'password', 'visible': true, 'remove': false, 'index': '3', 'childElements': {
                'id': 'confirmpassword', 'visible': true, 'remove': false, 'index': '4'
            }
        }
    ];

    routeInstructions: any = [
        { 'id': '100', 'path': 'home', 'feature': 'courses', 'active': true },
        { 'id': '101', 'path': 'login', 'feature': 'courses', 'active': true },
        { 'id': '102', 'path': 'welcome', 'feature': 'courses', 'active': true },
    ];

    configuration: any = {
            'TenantCode': 'CSLP',
            'Features': {
                'FeatureId': '123',
                'Routings': [
                    { 'id': '100', 'path': 'home', 'feature': 'courses', 'active': true },
                    { 'id': '101', 'path': 'login', 'feature': 'courses', 'active': true },
                    { 'id': '102', 'path': 'welcome', 'feature': 'courses', 'active': true },
                ],
                'Pages': [
                    {
                    'PageId': '1236',
                    'Validation': [
                        { 'id': 'firstName', 'defaultValue': 'Alex', 'validators': ['required', 'maxlength']},
                        { 'id': 'phoneNo', 'defaultValue': null, 'validators': ['required', 'maxlength', 'phoneNo'] },
                        { 'id': 'email', 'defaultValue': null, 'validators': ['required', 'maxlength', 'email'] }
                    ],
                    'Layouts': [
                        { 'id': 'firstName', 'visible': true, 'remove': false, 'index': '1', 'onFocus': true },
                        { 'id': 'email', 'visible': true, 'remove': false, 'index': '2', 'onFocus': false },
                        {
                            'id': 'password', 'visible': true, 'remove': false, 'index': '3', 'childElements': {
                                'id': 'confirmpassword', 'visible': true, 'remove': false, 'index': '4'
                            }
                        }
                    ]
                },
                {
                    'PageId': '1237',
                    'Validation': [
                        { 'id': 'firstName', 'defaultValue': 'Alex', 'validators': ['required', 'maxlength']},
                        { 'id': 'phoneNo', 'defaultValue': null, 'validators': ['required', 'maxlength', 'phoneNo'] },
                        { 'id': 'email', 'defaultValue': null, 'validators': ['required', 'maxlength', 'email'] }
                    ],
                    'Layouts': [
                        { 'id': 'firstName', 'visible': true, 'remove': false, 'index': '1', 'onFocus': true },
                        { 'id': 'email', 'visible': true, 'remove': false, 'index': '2', 'onFocus': false },
                        {
                            'id': 'password', 'visible': true, 'remove': false, 'index': '3', 'childElements': {
                                'id': 'confirmpassword', 'visible': true, 'remove': false, 'index': '4'
                            }
                        }
                    ]
                }]
                },
            'Routings': [
                { 'id': '100', 'path': 'home', 'feature': 'root', 'active': true },
                { 'id': '101', 'path': 'login', 'feature': 'root', 'active': true },
                { 'id': '102', 'path': 'welcome', 'feature': 'root', 'active': true }
            ]
        };



    ngAfterViewChecked() {
        for (let element of this.layoutInstruction) {
            if (element.id === 'password') {
                if (element.visible === false) {
                    this.passwordShowHide = false;
                }
            }
        }

    }
}



