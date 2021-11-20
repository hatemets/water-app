import React from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import firebase from "./firebase"
import "firebase/database";

class Example extends React.Component {
    createNotification = (type) => {
        return () => {
            switch (type) {
                case 'info':
                    NotificationManager.info('Info message');
                    break;
                case 'success':
                    NotificationManager.success('Success message', 'Title here');
                    break;
                case 'warning':
                    NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
                    break;
                case 'error':
                    NotificationManager.error('Error message', 'Click me!', 5000, () => {
                        alert('callback');
                    });
                    break;
            }
        };
    };

    componentDidMount() {
        console.log("listening to db")
        firebase
            .database("https://junction2021-cf61c-default-rtdb.europe-west1.firebasedatabase.app/")
            .ref('test')
            .on('child_changed', (data) => {
                const values = data.val();
                let type = ''
                let message = ''
                if (values.time < 15) {
                    type = 'warning'
                    message = 'You washed your hands only for ' + values.time + "! Recommended amount is 20 seconds"
                }
                NotificationManager.success('Success message', message);
            });
    }

    render() {
        return (
            <div>
                <button className='btn btn-info'
                    onClick={this.createNotification('info')}>Info
                </button>
                <hr />
                <button className='btn btn-success'
                    onClick={this.createNotification('success')}>Success
                </button>
                <hr />
                <button className='btn btn-warning'
                    onClick={this.createNotification('warning')}>Warning
                </button>
                <hr />
                <button className='btn btn-danger'
                    onClick={this.createNotification('error')}>Error
                </button>

                <NotificationContainer />
            </div>
        );
    }
}

export default Example;