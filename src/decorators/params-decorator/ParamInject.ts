import StoreMetadata from '../StoreMetadata'

export function VkBot() {
    return function (target, propertyKey: string, index: number) {
        StoreMetadata.paramInject.push({
            index,
            target,
            propertyKey,
            type: 'bot'
        })
    }
}

export function VkMessage() {
    return function (target, propertyKey: string, index: number) {
        StoreMetadata.paramInject.push({
            index,
            target,
            propertyKey,
            type: 'message'
        })
    }
}