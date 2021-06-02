class Serializer {
  
    serialize (data) {
        data = this.filter(data)

        return JSON.stringify(data)
    }

    filter (data) {
        if (Array.isArray(data)) {
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
        this.publicFields.forEach((campo) => {
            if (data.hasOwnProperty(campo)) {
                newObject[field] = data[field]
            }
        })
        return newObject
    }

}