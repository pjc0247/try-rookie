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


    object: `class person {
    def say_hello() {
        puts ("Hello");
    }
}
class engineer : person {
    def say_hello() {
        puts ("HelloWorld");
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

    dictionary: `class dict_test {
    @main
    static def main() {
        person = {
            name : "Jinwoo",
            age  : 21,
            hobby: ["Game", "AVR", "Buying Thinkpad X1"]
        };

        for (k,v in person) {
            puts (\`{{k}}: {{v}}\`);
        }
    }
}
`,
    json: `class json_test {
    @main
    static def main() {
        parse();
        stringify();
    }
    
    static def parse() {
        p = "{"name": "Jinwoo", "age": 24}";
        j = json.parse(p);

        puts (j.name);
        puts (j.age);
    }
    static def stringify() {
        o = object.new();
        o.name = "Jinwoo";
        o.age = 24;

        puts (json.stringify(o));
    }
}
`
}

var change_example = function(id) {
    editor.setValue(presets[id], -1);
    refresh();
}