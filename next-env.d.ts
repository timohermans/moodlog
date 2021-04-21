/// <reference types="next" />
/// <reference types="next/types/global" />

declare module "*.svg" {
    const content: any;
    export default content;
}

declare global {
    namespace NodeJS {
        interface Global {
            prisma: any;
        }
    }
}