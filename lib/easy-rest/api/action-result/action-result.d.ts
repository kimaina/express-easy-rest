import { ResponseMessage } from "./response-message";
export interface IActionResult {
    executeAsync(): Promise<ResponseMessage>;
}
