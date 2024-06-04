document.addEventListener('DOMContentLoaded', () => {
    //TrackJS.track('Testing TrackJS!');      
    // Custom Error
    class GlobalErr extends Error {
        constructor(message) {
            super(message);
            this.name = "FormError";
        }
    }

    const globalErr = new GlobalErr('Sadly an error happened my friend');
    // Form Handling
    let form = document.querySelector('form');
    form.addEventListener('submit', e => {
        e.preventDefault();
        let output = document.querySelector('output');
        let firstNum = document.querySelector('#first-num').value;
        let secondNum = document.querySelector('#second-num').value;
        let operator = document.querySelector('#operator').value;

        try {
            if (isNaN(firstNum) || isNaN(secondNum)) {
                throw globalErr;
            }
            output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
        } catch (error) {
            if (error instanceof GlobalErr) {
                throw error;
            } else {
                output.innerHTML = "An error occurred";
            }
        } finally {
            console.log('An attempt at a calculation was made');
        }
    });
    let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));
  
    // On click of the button logB, console log a message
    errorBtns[0].addEventListener('click', () => {
      console.log('This is a console log message');
    });
  
    // On click of the button errB, console error a message
    errorBtns[1].addEventListener('click', () => {
      console.error('This is a console error message');
    });
  
    // On click of the button countB, console count a message
    errorBtns[2].addEventListener('click', () => {
      console.count('Count Button');
    });
  
    // On click of the button warnB, console warn a message
    errorBtns[3].addEventListener('click', () => {
      console.warn('This is a console warn message');
    });
  
    // On click of the button assertB, console assert a message
    errorBtns[4].addEventListener('click', () => {
      console.assert(false, 'This is a console assert message');
    });
  
    // On click of the button clearB, console clear the console
    errorBtns[5].addEventListener('click', () => {
      console.clear();
    });
  
    // On click of the button dirB, console dir a message
    errorBtns[6].addEventListener('click', () => {
      console.dir(errorBtns[6]);
    });
  
    // On click of the button dirxmlB, console dirxml a message
    errorBtns[7].addEventListener('click', () => {
      console.dirxml(errorBtns[7]);
    });
  
    // On click of the button gstartB, console group start a message
    errorBtns[8].addEventListener('click', () => {
      console.group('Group Start');
    });
  
    // On click of the button gendB, console group end a message
    errorBtns[9].addEventListener('click', () => {
      console.groupEnd();
    });
  
    // On click of the button tableB, console table a message
    errorBtns[10].addEventListener('click', () => {
      console.table([
        ['Name', 'Age'],
        ['John', 25],
        ['Jane', 22]
      ]);
    });
  
    // On click of the button starttimerB, console start a timer
    errorBtns[11].addEventListener('click', () => {
      console.time('Timer');
    });
  
    // On click of the button endtimerB, console end a timer
    errorBtns[12].addEventListener('click', () => {
        console.timeEnd('Timer');
    });

    // On click of the button traceB, console trace a message
    errorBtns[13].addEventListener('click', () => {
        function foo() {
            function bar() {
                console.trace();
            }
            bar();
        }
        foo();
    });

    // On click of the button global error button, trigger a reference error
    errorBtns[14].addEventListener('click', () => {
        try {
            iDontExistLOL();
        } catch (e) {
            console.log('An error occurred');
            throw e;
            
        }
    });
});
  
