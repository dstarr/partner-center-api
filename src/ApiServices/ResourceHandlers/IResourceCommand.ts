export interface IResourceCommand {
    schema: string;
    execute(resource: any): void;
}



