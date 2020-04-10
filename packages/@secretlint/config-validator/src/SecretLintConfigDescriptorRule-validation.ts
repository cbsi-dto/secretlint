/* tslint:disable */
// generated by typescript-json-validator
import {inspect} from 'util';
import Ajv = require('ajv');
import {SecretLintConfigDescriptorRule} from '@secretlint/types';
export const ajv = new Ajv({"allErrors":true,"coerceTypes":"array","format":"fast","nullable":false,"unicode":true,"uniqueItems":true,"useDefaults":true});

ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'));

export {SecretLintConfigDescriptorRule};
export const SecretLintConfigDescriptorRuleSchema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "definitions": {
    "Options": {
      "$ref": "#/definitions/__type_1"
    },
    "Options_1": {
      "$ref": "#/definitions/__type_5"
    },
    "Options_2": {
      "type": "object"
    },
    "SecretLintRuleCreator": {
      "$ref": "#/definitions/__type_2"
    },
    "SecretLintRuleCreator_1": {
      "$ref": "#/definitions/__type_7"
    },
    "SecretLintRuleLocalizeMessageHandler": {
      "$ref": "#/definitions/__type_4"
    },
    "SecretLintRuleLocalizeMessages": {
      "$ref": "#/definitions/__type_3"
    },
    "SecretLintRulePresetCreator": {
      "$ref": "#/definitions/__type_6"
    },
    "SecretLintRuleSeverityLevel": {
      "description": "Rule Severity Level",
      "enum": [
        "error",
        "info",
        "warning"
      ],
      "type": "string"
    },
    "SecretlintCoreSharedOptions": {
      "$ref": "#/definitions/__type"
    },
    "__type": {
      "additionalProperties": {
      },
      "type": "object"
    },
    "__type_1": {
      "properties": {
      },
      "type": "object"
    },
    "__type_2": {
      "properties": {
        "messages": {
          "$ref": "#/definitions/SecretLintRuleLocalizeMessages"
        },
        "meta": {
          "properties": {
            "docs": {
              "properties": {
                "url": {
                  "type": "string"
                }
              },
              "required": [
                "url"
              ],
              "type": "object"
            },
            "id": {
              "type": "string"
            },
            "recommended": {
              "type": "boolean"
            },
            "supportedContentTypes": {
              "items": {
                "enum": [
                  "all",
                  "binary",
                  "text"
                ],
                "type": "string"
              },
              "type": "array"
            },
            "type": {
              "enum": [
                "filter",
                "scanner"
              ],
              "type": "string"
            }
          },
          "required": [
            "id",
            "recommended",
            "supportedContentTypes",
            "type"
          ],
          "type": "object"
        }
      },
      "required": [
        "messages",
        "meta"
      ],
      "type": "object"
    },
    "__type_3": {
      "additionalProperties": {
        "allOf": [
          {
            "$ref": "#/definitions/{[x:string]:SecretLintRuleLocalizeMessageHandler<any>;}"
          },
          {
            "properties": {
              "en": {
                "$ref": "#/definitions/SecretLintRuleLocalizeMessageHandler"
              }
            },
            "required": [
              "en"
            ],
            "type": "object"
          }
        ]
      },
      "type": "object"
    },
    "__type_4": {
      "type": "object"
    },
    "__type_5": {
      "properties": {
      },
      "type": "object"
    },
    "__type_6": {
      "properties": {
        "meta": {
          "properties": {
            "docs": {
              "properties": {
                "url": {
                  "type": "string"
                }
              },
              "required": [
                "url"
              ],
              "type": "object"
            },
            "id": {
              "type": "string"
            },
            "recommended": {
              "type": "boolean"
            },
            "type": {
              "enum": [
                "preset"
              ],
              "type": "string"
            }
          },
          "required": [
            "id",
            "recommended",
            "type"
          ],
          "type": "object"
        }
      },
      "required": [
        "meta"
      ],
      "type": "object"
    },
    "__type_7": {
      "properties": {
        "messages": {
          "$ref": "#/definitions/SecretLintRuleLocalizeMessages"
        },
        "meta": {
          "properties": {
            "docs": {
              "properties": {
                "url": {
                  "type": "string"
                }
              },
              "required": [
                "url"
              ],
              "type": "object"
            },
            "id": {
              "type": "string"
            },
            "recommended": {
              "type": "boolean"
            },
            "supportedContentTypes": {
              "items": {
                "enum": [
                  "all",
                  "binary",
                  "text"
                ],
                "type": "string"
              },
              "type": "array"
            },
            "type": {
              "enum": [
                "filter",
                "scanner"
              ],
              "type": "string"
            }
          },
          "required": [
            "id",
            "recommended",
            "supportedContentTypes",
            "type"
          ],
          "type": "object"
        }
      },
      "required": [
        "messages",
        "meta"
      ],
      "type": "object"
    },
    "{[x:string]:SecretLintRuleLocalizeMessageHandler<any>;}": {
      "type": "object"
    }
  },
  "properties": {
    "allowMessageIds": {
      "description": "An array of message id for suppress error report.\nmessage id is defined in each rule.",
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "disabled": {
      "description": "If true, Disable the rule.\nDefault: false",
      "type": "boolean"
    },
    "id": {
      "description": "**Required**\nRule id that is package name or shorten package name\nExamples\n- \"@scope/secretlint-rule-example\" or \"@scope/example\"(shorten)\n- \"secretlint-rule-example\" or \"example\"(shorten)",
      "type": "string"
    },
    "options": {
      "$ref": "#/definitions/Options_2",
      "description": "Rule options.\nThis value is defined by each rules.\nDefault: {} (empty object)"
    },
    "rule": {
      "$ref": "#/definitions/SecretLintRuleCreator_1",
      "description": "FOR DEBUG\nRule instance"
    },
    "severity": {
      "$ref": "#/definitions/SecretLintRuleSeverityLevel",
      "description": "Severity level for the rule.\nDefault: \"error\""
    }
  },
  "required": [
    "id"
  ],
  "type": "object"
};
export type ValidateFunction<T> = ((data: unknown) => data is T) & Pick<Ajv.ValidateFunction, 'errors'>
export const isSecretLintConfigDescriptorRule = ajv.compile(SecretLintConfigDescriptorRuleSchema) as ValidateFunction<SecretLintConfigDescriptorRule>;
export default function validate(value: unknown): SecretLintConfigDescriptorRule {
  if (isSecretLintConfigDescriptorRule(value)) {
    return value;
  } else {
    throw new Error(
      ajv.errorsText(isSecretLintConfigDescriptorRule.errors!.filter((e: any) => e.keyword !== 'if'), {dataVar: 'SecretLintConfigDescriptorRule'}) +
      '\n\n' +
      inspect(value),
    );
  }
}
