alert("js работает");
//

/*
*
* требования к паролю - латиница от 6 до 32 символов
*
* */
/*
комментарий

 */
//console.log(window.location);
/*
*
*  селекторы
*  div.class
*  #wrapper
*  table tr td
*
*  form.form_register input
*  input[type=text]
*+ - хотя бы один
* . - наличие 0 и более элементов
* */
var mail_regexp = /^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z]{2,10}$/i;
var phone_regexp = /^\+[0-9]{11,12}$/;//\ +7 9110123456
var name_regexp = /^[a-zA-ZА-Яа-яёЁ-]{2,32}$/i;
var password_regexp = "";
/*
 * // - начало и конец шаблона регулярного выражения
 * ^ - начало регулярного выражения
 * $ - конец регулярного выражения
 * [] - набор символов или квантификаторов
 * a - z - все буквы на латинице
 * A - Я  - символы кириллицы
 * {2, 32}
 *
 *
 * */
var ids_regexp = /^[\d]{1,99999999}$/;

var comment_min_size = 30;
var comment_max_size = 3000;

var checker = '<span class="checker">&#10004</span>';


/*
 * 1 - обращение к объекту jquery в контексте html-документа
 * 2 - ready - метод библиотеки jquery который проверяет загружена ли страница и готова ли к
 * 3 - function(){A; B; C; ... Z; } - опреаторы, которые будут срабатывать в контексте метода ready
 *
 *
 *
 * //создание анонимной функции
 * var function_name = function(){};
 *
 * //создание именованной функции
 * function hello(){
 *   alert("hello!");
 * }
 *
 * hello();
 *
 * шаги анонимной функции validate_firstname
 * 1. присвоение объекта input.firstname переменной elem
 * 2. получение функциой val() (ф-ция jquery ) значение текстового поля имени
 * 3 - обращение к значению текстового поля имени и присвоение ему отформатированного значения
 * trim() - функциоя обрезания пробелов
 * 4. length - свойство обозначающее длину строковой переменной
 * 5. Переход к полю для отображения результата
 * parent() - функция jquery для перехода к объекту-родителю, next() - функция jquery для перехода к следуему элементу
 * 6. value.trim().match(name_regexp) == null
 * match - (функция javascript) проверка строки на соответствие шаблону регулярного выражения
 *|| - логическое "ИЛИ"
 * null - отсутствие данных
 * == - проверка равенства
 *  =  - операция присвоение
 *  7. text() - функция получения и вставки текста из элемента jquery (функция jquery)
 *  8. html() - функция получения html-контента и вставки html-контента из элемента jquery (функция jquery)
 *  9. addClass - функция jquery для добавления класса к элементу
 *  10. removeClass - функция jquery для удаления класса у элемента
 *  13. on - создание обработчка события
 *  keyup - нажатие кнопки при фокусе на элементе
 *  change - изменение значения элемента формы
 *  submit - событие отправки формы
 *  reset - событие сбрасывания формы
 * size() => аналог Length - количество (функция jquery)
 *
 * */

//$(function(){
//    alert(1);
//
//
//});

$(document).ready(function(){

        var validate_firstname = function () {

            var elem = $(".firstname");//1
            var value = $(".firstname").val();//2
            $(".firstname").val(value.trim());//3
            var string_length = value.trim().length;//4
            var elem_result = $(".firstname").parent().next();//5
            if(string_length != 0) {
                if (string_length < 2 || string_length > 32 || value.trim().match(name_regexp) == null) {//6
                    var error_text = $(".firstname_error_text").text();//7
                    elem_result.html(error_text);//8
                    elem.addClass("field_incorrect");//9
                } else {//10

                    elem_result.html(checker);//11
                    elem.removeClass("field_incorrect");//12
                }//13
            }
        };
  //  Surname

    var validate_Surname = function () {

        var elem = $(".Surname");//1
        var value = $(".Surname").val();//2
        $(".Surname").val(value.trim());//3
        var string_length = value.trim().length;//4
        var elem_result = $(".Surname").parent().next();//5
        if(string_length != 0) {
            if (string_length < 6 || string_length > 32 || value.trim().match(name_regexp) == null) {//6
                var error_text = $(".Surname_error_text").text();//7
                elem_result.html(error_text);//8
                elem.addClass("field_incorrect");//9
            } else {//10

                elem_result.html(checker);//11
                elem.removeClass("field_incorrect");//12
            }//13
        }
    };
    var validate_mail = function () {

        var elem = $(".mail");//1
        var value = $(".mail").val();//2
        $(".mail").val(value.trim());//3
        var string_length = value.trim().length;//4
        var elem_result = $(".mail").parent().next();//5
        if(string_length != 0) {
            if (value.trim().match(mail_regexp) == null) {//6
                var error_text = $(".mail_error_text").text();//7
                elem_result.html(error_text);//8
                elem.addClass("field_incorrect");//9
            } else {//10

                elem_result.html(checker);//11
                elem.removeClass("field_incorrect");//12
            }//13
        }
    };

//



    var validate_phone = function () {

        var elem = $(".phone");//1
        var value = $(".phone").val();//2
        $(".phone").val(value.trim());//3
        var string_length = value.trim().length;//4
        var elem_result = $(".phone").parent().next();//5
        if(string_length != 0) {
            if (value.trim().match(phone_regexp) == null) {//6
                var error_text = $(".phone_error_text").text();//7
                elem_result.html(error_text);//8
                elem.addClass("field_incorrect");//9
            } else {//10

                elem_result.html(checker);//11
                elem.removeClass("field_incorrect");//12
            }//13
        }
    };

    $(".firstname").on("keyup change", function () {//13
    	validate_firstname();//14
    });
    $(".mail").on("keyup change", function () {//13
        validate_firstname();//14

    $(".Surname").on("keyup change", function () {//13
        validate_Surname();//14


    $(".phone").on("keyup change", function () {//13
        validate_phone();//14
    });
   //mail
    validate_mail();
    validate_Surname();
    validate_firstname();
    validate_phone();

    $("form[name=register_form]").submit(function () {
    	var field_incorrect_count = $("form[name=register_form] .field_incorrect").size();
    	if (field_incorrect_count == 0) {
    		return true;
            //продолжение действия функции submit
    	} else {
    		return false;
            //остановка выполнения функции (submit)
    	}
    });

});