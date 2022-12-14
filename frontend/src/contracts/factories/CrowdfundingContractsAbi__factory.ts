/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type { Provider, Wallet, AbstractAddress } from "fuels";
import { Interface, Contract } from "fuels";
import type {
  CrowdfundingContractsAbi,
  CrowdfundingContractsAbiInterface,
} from "../CrowdfundingContractsAbi";
const _abi = [
  {
    type: "function",
    name: "create_project",
    inputs: [
      {
        type: "str[15]",
        name: "projectName",
      },
      {
        type: "u64",
        name: "amount",
      },
      {
        type: "str[10]",
        name: "author",
      },
    ],
    outputs: [
      {
        type: "struct Project",
        name: "",
        components: [
          {
            type: "u64",
            name: "uniqueId",
          },
          {
            type: "bool",
            name: "is_active",
          },
          {
            type: "str[10]",
            name: "author",
          },
          {
            type: "enum Identity",
            name: "owner",
            components: [
              {
                type: "struct Address",
                name: "Address",
                components: [
                  {
                    type: "b256",
                    name: "value",
                  },
                ],
              },
              {
                type: "struct ContractId",
                name: "ContractId",
                components: [
                  {
                    type: "b256",
                    name: "value",
                  },
                ],
              },
            ],
          },
          {
            type: "u64",
            name: "amount",
          },
          {
            type: "str[15]",
            name: "projectname",
          },
        ],
      },
    ],
  },
];

export class CrowdfundingContractsAbi__factory {
  static readonly abi = _abi;
  static createInterface(): CrowdfundingContractsAbiInterface {
    return new Interface(_abi) as unknown as CrowdfundingContractsAbiInterface;
  }
  static connect(
    id: string | AbstractAddress,
    walletOrProvider: Wallet | Provider
  ): CrowdfundingContractsAbi {
    return new Contract(
      id,
      _abi,
      walletOrProvider
    ) as unknown as CrowdfundingContractsAbi;
  }
}
