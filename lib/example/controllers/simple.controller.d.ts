import { Controller } from "../../easy-rest/controller/controller";
export declare class SimpleController extends Controller {
    constructor();
    hello(name: string): string;
    getObject(name: string): Object;
    getError(): void;
}
