import { Session } from "next-auth";
import { WithAdditionalParams } from "next-auth/_utils";

export type KeycloakSession = WithAdditionalParams<Session & { user: { id: string } }>;