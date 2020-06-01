import Command from "@oclif/command";
import { DocumentNode } from "graphql";

interface Handler {
  command: Command;
  query: DocumentNode;
  variables?: Record<string, any>;
}

const handler = async ({ command, query, variables }: Handler) => {
  console.log(command, query, variables);
  return null;
};

export default handler;
