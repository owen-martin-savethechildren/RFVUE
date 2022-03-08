
import axios from 'axios';
import $ from 'jquery'; /* eslint-disable-line no-unused-vars */

let getModel = {
    "ApiPacket": {

        "Packet": {

            "IncludeChild": false,

            "ModelName": "",

            "OrderBy": "",

            "Select": "",

            "Where": ""

        }

    },

    "Command": "GetData",

    "PageNo": 1,

    "PageSize": 0,

    "TableName": null,

    "TotalRecord": 0,

    "UserId": 0

};


let setModel = /* eslint-disable-line no-unused-vars */ {
    "ApiPacket": {

        "PacketList": []
    },

    "Command": "add",

    "TableName": "",

    "UserId": 0

}

let TaskStyle = /* eslint-disable-line no-unused-vars */ {

    "TaskStyleId": null, // "046a6cef-65af-49d7-9eb8-ed67e2d6d330"

    "ProjectKey": "BLOOM", // "BLOOM", "NEW ENTRY", "UPDATE"

    "StyleJson": null, // "[{A1:'Color:#000'},{A2:'Color:#fff'}]"

    "MergeJson": null // "[{A1:A9,{B2:C9}]"
}

let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS'
    }
};

const api = {

    async get(tableName, pageNo = 1, pageSize = 0, userId = 0, modelName = "", orderBy = "", select = "", where = "") {
        /*console.log(tableName, pageNo, pageSize, userId, modelName, orderBy, select, where);*/
        getModel.ApiPacket.Packet.ModelName = modelName ? modelName : tableName;
        getModel.ApiPacket.Packet.OrderBy = orderBy;
        getModel.ApiPacket.Packet.Select = select;
        getModel.ApiPacket.Packet.Where = where;

        getModel.PageNo = pageNo;
        getModel.PageSize = pageSize;
        getModel.TableName = tableName;
        getModel.UserId = userId;


        //https://pinoyparentapi.scibd.info
        //https://rfapi.scibd.info
        //https://testapi.rf.scibd.info
       

        return (await axios.post(`https://rfapi.scibd.info/api/Fetch/GetPacket`, getModel, axiosConfig)).data
            
        //return "okay"
    },

    async post(modelName, data) /* eslint-disable-line no-unused-vars */ {
        setModel.TableName = modelName;
        setModel.ApiPacket.PacketList = data;

        return await axios.post(`https://rfapi.scibd.info/api/Sync/SendPacket`, setModel);
    }
}


export default {
    api
}