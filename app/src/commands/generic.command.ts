export class GenericCommand
{
    constructor
    (
        public readonly id : string,
        public readonly type : string,
        public readonly message : string
    ) {}
}