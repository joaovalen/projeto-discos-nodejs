const ValueNotSupported = require('./errors/ValueNotSupported')

class Serializer {
    json (data) {
        return JSON.stringify(data)
    }
    
    serialize (data) {
        data = this.filter(data)
        if (this.contentType === 'application/json') {
            return this.json(data)
        }
        //throw new ValueNotSupported(this.contentType)        
    }

    filter (data) {
        if (Array.isArray(data)) {
            // Caso os dados sejam uma lista passamos o filter objeto em cada item
            // Passando o filterObject por cada item da nossa lista
            data = data.map(item => {
                return this.filterObject(item)
            })
        } else {
            data = this.filterObject(data)
        }
        return data
    }

    filterObject (data) {
        const newObject = {}
        // Separando os 3 data públicos
        this.publicFields.forEach((fields) => {
            if (data.hasOwnProperty(fields)) {
                newObject[fields] = data[fields]
            }
        })
        return newObject 
    }

}

// Tentative method
class UserSerializer extends Serializer {
    constructor (contentType, extraFields) {
        super()
        this.contentType = contentType
        this.publicFields = [
            'name',
            'cpf',
            'phone',
            'email',
            'address'
        ].concat(extraFields || [])
    }
}

class ErrorSerializer extends Serializer {
    constructor (contentType, extraFields) {
        super()
        this.contentType = contentType
        this.publicFields = [
            'id',
            'message'
        ].concat(extraFields || [])
    }
}

module.exports = {
    Serializer: Serializer, 
    UserSerializer: UserSerializer,
    ErrorSerializer: ErrorSerializer,
    // lista com os formatos aceitos
    acceptedFormats: ['application/json']
}