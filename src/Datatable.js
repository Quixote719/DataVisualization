import React, { PureComponent } from 'react';
import {Table} from 'antd';
import 'antd/dist/antd.css';

const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
}, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
},{
    title: '爱好',
    dataIndex: 'hobby',
    key: 'hobby',
}];

const dataSource = [{
    key: '1',
    age: 32,
    name: 'Jack',
    hobby: 'tennis',
    address: '西湖区湖底公园1号'
}, {
    key: '2',
    age: 42,
    name: 'Daniel',
    hobby: 'basketball',
    address: '西湖区湖底公园3号'
},
    {
        key: '3',
        age: 21,
        name: 'John',
        hobby: 'pingpong',
        address: '西湖区湖底公园7号'
    },{
        key: '4',
        age: 29,
        name: 'Bill',
        hobby: 'baseball',
        address: '西湖区湖底公园7号'
    }];

var data = [];

for (let i=0; i<247; i++) {
    data.push({
        key: i,
        name: '李大嘴' + i,
        age: 32,
        address: '西湖区湖底公园' + i + '号',
        hobby: 'basketball'
    });
}

export default class DataTable extends PureComponent {
    render() {
        return (
            <div>
                <Table dataSource={dataSource} columns={columns}/>
            </div>
        );
    }
}


