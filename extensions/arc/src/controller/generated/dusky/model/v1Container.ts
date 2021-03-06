/**
 * Dusky API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1ContainerPort } from './v1ContainerPort';
import { V1EnvFromSource } from './v1EnvFromSource';
import { V1EnvVar } from './v1EnvVar';
import { V1Lifecycle } from './v1Lifecycle';
import { V1Probe } from './v1Probe';
import { V1ResourceRequirements } from './v1ResourceRequirements';
import { V1SecurityContext } from './v1SecurityContext';
import { V1VolumeDevice } from './v1VolumeDevice';
import { V1VolumeMount } from './v1VolumeMount';

export class V1Container {
    'args'?: Array<string>;
    'command'?: Array<string>;
    'env'?: Array<V1EnvVar>;
    'envFrom'?: Array<V1EnvFromSource>;
    'image'?: string;
    'imagePullPolicy'?: string;
    'lifecycle'?: V1Lifecycle;
    'livenessProbe'?: V1Probe;
    'name'?: string;
    'ports'?: Array<V1ContainerPort>;
    'readinessProbe'?: V1Probe;
    'resources'?: V1ResourceRequirements;
    'securityContext'?: V1SecurityContext;
    'startupProbe'?: V1Probe;
    'stdin'?: boolean | null;
    'stdinOnce'?: boolean | null;
    'terminationMessagePath'?: string;
    'terminationMessagePolicy'?: string;
    'tty'?: boolean | null;
    'volumeDevices'?: Array<V1VolumeDevice>;
    'volumeMounts'?: Array<V1VolumeMount>;
    'workingDir'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "args",
            "baseName": "args",
            "type": "Array<string>"
        },
        {
            "name": "command",
            "baseName": "command",
            "type": "Array<string>"
        },
        {
            "name": "env",
            "baseName": "env",
            "type": "Array<V1EnvVar>"
        },
        {
            "name": "envFrom",
            "baseName": "envFrom",
            "type": "Array<V1EnvFromSource>"
        },
        {
            "name": "image",
            "baseName": "image",
            "type": "string"
        },
        {
            "name": "imagePullPolicy",
            "baseName": "imagePullPolicy",
            "type": "string"
        },
        {
            "name": "lifecycle",
            "baseName": "lifecycle",
            "type": "V1Lifecycle"
        },
        {
            "name": "livenessProbe",
            "baseName": "livenessProbe",
            "type": "V1Probe"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "ports",
            "baseName": "ports",
            "type": "Array<V1ContainerPort>"
        },
        {
            "name": "readinessProbe",
            "baseName": "readinessProbe",
            "type": "V1Probe"
        },
        {
            "name": "resources",
            "baseName": "resources",
            "type": "V1ResourceRequirements"
        },
        {
            "name": "securityContext",
            "baseName": "securityContext",
            "type": "V1SecurityContext"
        },
        {
            "name": "startupProbe",
            "baseName": "startupProbe",
            "type": "V1Probe"
        },
        {
            "name": "stdin",
            "baseName": "stdin",
            "type": "boolean"
        },
        {
            "name": "stdinOnce",
            "baseName": "stdinOnce",
            "type": "boolean"
        },
        {
            "name": "terminationMessagePath",
            "baseName": "terminationMessagePath",
            "type": "string"
        },
        {
            "name": "terminationMessagePolicy",
            "baseName": "terminationMessagePolicy",
            "type": "string"
        },
        {
            "name": "tty",
            "baseName": "tty",
            "type": "boolean"
        },
        {
            "name": "volumeDevices",
            "baseName": "volumeDevices",
            "type": "Array<V1VolumeDevice>"
        },
        {
            "name": "volumeMounts",
            "baseName": "volumeMounts",
            "type": "Array<V1VolumeMount>"
        },
        {
            "name": "workingDir",
            "baseName": "workingDir",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1Container.attributeTypeMap;
    }
}

