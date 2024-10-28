export interface ResponseContainer<T> {
	status: Status;
	message?: string;
	data?: T;
}
export type Status = "ok" | "error";