function validateInput(input) {
    try {
        if (input === undefined || input === null) {
            throw new Error(" Input cannot be null or undefined. ");
        }

        if (typeof input !== "string") {
            throw new Error(" Input must be a string. ");
        }

        if (input.trim() === "") {
            throw new Error(" Input cannot be an empty string. ");
        }

        return " Input is valid! ";
    } catch (error) {
        return ` Validation Error: ${error.message}`;
    }
}
function demonstrateErrors(type) {
    try {
        switch (type) {
            case "reference":
                console.log(notDefinedVariable);
                break;

            case "type":
                let num = 5;
                num.toUpperCase();
                break;
                
            case "range":
                let arr = new Array(-1);
                break;

            default:
                throw new Error(" Unknown error type requested. ");
        }
    } catch (error) {
        console.error(`Caught Error: ${error.name} - ${error.message}`)
    }  
}
const stringHelpers = {
    toTitleCase(str) {
        if (typeof str !== "string") throw new TypeError(" Expected a string. ");
        return str
        .toLowerCase()
        .split("")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join("");
    },

    reverseString(str) {
        if (typeof str !== "string") throw new TypeError(" Expected a string. ");
        return str.split("").reverse().join("");
    },

    countWords(str) {
        if (typeof str !== "string") throw new TypeError(" Expected a string. ");
        return str.trim().split(/\s+/).length;
    }
};
const arrayHelpers = {
    getFirst(arr) {
        if (!Array.isArray(arr)) throw new TypeError(" Expected an array. ");
        return arr[0];
    },

    getLast(arr) {
        if (!Array.isArray(arr)) throw new TypeError(" Expected an array. ");
        return arr[arr.length - 1];
    },

    removeDuplicates(arr) {
        if (!Array.isArray(arr)) throw new TypeError(" Expected an array. ");
        return [...new Set(arr)];
    }
};
console.log(" === VALIDATION TEST === ");
console.log(validateInput(" Hello "));
console.log(validateInput(""));
console.log(validateInput(123));

console.log(" \n=== ERROR TYPE DEMONSTRATION === ");
demonstrateErrors("reference");
demonstrateErrors("type");
demonstrateErrors("range");

console.log("\n=== STRING HELPERS ===");
console.log(stringHelpers.toTitleCase("hello world from JavaScript. "));
console.log(stringHelpers.reverseString("abcdef"));
console.log(stringHelpers.countWords(" This is a test message. "));

console.log("\n=== ARRAY HELPERS ===");
console.log(arrayHelpers.getFirst([10, 20, 30]));
console.log(arrayHelpers.getLast([10, 20, 30]));
console.log(arrayHelpers.removeDuplicates([1, 1, 2, 3, 3, 4]));