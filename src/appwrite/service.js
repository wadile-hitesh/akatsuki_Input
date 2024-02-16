import conf from '../conf/conf.js';
import { Client, ID, Databases, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
    }

    async addLab({ id, labNumber, password, code }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                ID.unique(),
                {
                    id,
                    labNumber,
                    password,
                    code
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: addLab :: error", error);
        }
    }

    async getLab(code){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [
                    Query.equal("code",[code])
                ]
            )
        } catch (error) {
            console.log("Appwrite serive :: addLab :: error", error);
        }
    }
}

const service = new Service()
export default service