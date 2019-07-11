const toCamelCase = str => {

}

const toSnakeCase = str => {

}

test(toSnakeCase("edabit"), "edabit");
test(toSnakeCase("helloEdabit"), "hello_edabit");
test(toSnakeCase("isModalOpen"), "is_modal_open");
test(toSnakeCase("getBackgroundColor"), "get_background_color");
test(toSnakeCase("isLoading"), "is_loading");
test(toSnakeCase("x"), "x");
test(toCamelCase("edabit"), "edabit");
test(toCamelCase("hello_edabit"), "helloEdabit");
test(toCamelCase("is_modal_open"), "isModalOpen");
test(toCamelCase("get_background_color"), "getBackgroundColor");
test(toCamelCase("is_loading"), "isLoading");
test(toCamelCase("x"), "x");