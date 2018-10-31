var presets = {
    fibo: `class example_fibo {
    @main
    static def main() {
        print(fib(10));
    }

    static def fib(x) {        
        if (x == 0) return 0;
        if (x == 1) return 1;
        
        return fib(x-1) + fib(x-2);
    }
}`,

    string: `class example_string {
    @main
    static def main() {
        a = "hello ";
        b = "world!";
        hello_world = a.append(b);

        puts (hello_world);
    }
}`,


    object: `class wasm_workaround { static def print(msg) { for (i=0;i<msg.length();i++) { puts(msg[i]); } puts("<");puts("b");puts("r");puts("/");puts(">"); } }
    
class person {
    def say_hello() {
        wasm_workaround.print("Hello");
    }
}
class engineer : person {
    def say_hello() {
        wasm_workaround.print("HelloWorld");
    }
}

class object_test {
    @main
    static def main() {
        // Hello
        person.new().say_hello();

        // HelloWorld
        engineer.new().say_hello();
    }
}
`,

    dictionary: `class wasm_workaround { static def print(msg) { for (i=0;i<msg.length();i++) { puts(msg[i]); } puts("<");puts("b");puts("r");puts("/");puts(">"); } }

class dict_test {
    @main
    static def main() {
        d = {
            a: 1,
            b: 2,
            c: "Hello"
        };

        for (k,v in d) {
            a = k.to_string();
            b = v.to_string();
            wasm_workaround.print(a);
            wasm_workaround.print(b);
        }
    }
}
`

}

var change_example = function(id) {
    editor.setValue(presets[id], -1);
}