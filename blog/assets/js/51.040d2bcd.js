(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{295:function(a,t,v){"use strict";v.r(t);var n=v(28),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,v=a._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h1",{attrs:{id:"java常见面试题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#java常见面试题"}},[a._v("#")]),a._v(" java常见面试题")]),a._v(" "),v("h2",{attrs:{id:"简述线程、程序、进程的基本概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#简述线程、程序、进程的基本概念"}},[a._v("#")]),a._v(" 简述线程、程序、进程的基本概念")]),a._v(" "),v("p",[a._v("线程与进程相似，但线程是一个比进程更小的执行单位。一个进程在其执行的过程中可以产生多个线程。与进程不同的是同类的多个线程共享同一块内存空间和一组系统资源，所以系统在产生一个线程，或是在各个线程之间作切换工作时，负担要比进程小得多，也正因为如此，线程也被称为轻量级进程。")]),a._v(" "),v("p",[a._v("程序是含有指令和数据的文件，被存储在磁盘或其他的数据存储设备中，也就是说程序是静态的代码。")]),a._v(" "),v("p",[a._v("进程是程序的一次执行过程，是系统运行程序的基本单位，因此进程是动态的。系统运行一个程序即是一个进程从创建，运行到消亡的过程。简单来说，一个进程就是一个执行中的程序，它在计算机中一个指令接着一个指令地执行着，同时，每个进程还占有某些系统资源如 CPU 时间，内存空间，文件，输入输出设备的使用权等等。换句话说，当程序在执行时，将会被操作系统载入内存中。")]),a._v(" "),v("p",[a._v("线程是进程划分成的更小的运行单位。线程和进程最大的不同在于基本上各进程是独立的，而各线程则不一定，因为同一进程中的线程极有可能会相互影响。从另一角度来说，进程属于操作系统的范畴，主要是同一段时间内，可以同时执行一个以上的程序，而线程则是在同一程序内几乎同时执行一个以上的程序段。")]),a._v(" "),v("h2",{attrs:{id:"面向对象和面向过程的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#面向对象和面向过程的区别"}},[a._v("#")]),a._v(" 面向对象和面向过程的区别")]),a._v(" "),v("ul",[v("li",[a._v("面向过程 ：面向过程性能比面向对象高。 因为类调用时需要实例化，开销比较大，比较消耗资源，所以当性能是最重要的考量因素的时候，比如单片机、嵌入式开发、Linux/Unix 等一般采用面向过程开发。但是，面向过程没有面向对象易维护、易复用、易扩展。")]),a._v(" "),v("li",[a._v("面向对象 ：面向对象易维护、易复用、易扩展。 因为面向对象有封装、继承、多态性的特性，所以可以设计出低耦合的系统，使系统更加灵活、更加易于维护。但是，面向对象性能比面向过程低")])]),a._v(" "),v("h2",{attrs:{id:"java和c-的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#java和c-的区别"}},[a._v("#")]),a._v(" Java和C++的区别?")]),a._v(" "),v("p",[a._v("•都是面向对象的语言，都支持封装、继承和多态；\n•Java 不提供指针来直接访问内存，程序内存更加安全；\n•Java 的类是单继承的，C++ 支持多重继承；虽然 Java 的类不可以多继承，但是接口可以多继承；\n•Java 有自动内存管理机制，不需要程序员手动释放无用内存。")]),a._v(" "),v("h2",{attrs:{id:"什么是字节码-采用字节码的好处是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是字节码-采用字节码的好处是什么"}},[a._v("#")]),a._v(" 什么是字节码?采用字节码的好处是什么?")]),a._v(" "),v("p",[a._v("在 Java 中，JVM 可以理解的代码就叫做字节码（即扩展名为 .class 的文件），它不面向任何特定的处理器，只面向虚拟机。")]),a._v(" "),v("p",[a._v("Java 语言通过字节码的方式，在一定程度上解决了传统解释型语言执行效率低的问题，同时又保留了解释型语言可移植的特点。所以 Java 程序运行时比较高效，而且，由于字节码并不针对一种特定的机器，因此，Java 程序无须重新编译便可在多种不同操作系统的计算机上运行。")]),a._v(" "),v("p",[a._v("Java 虚拟机（JVM）是运行 Java 字节码的虚拟机。JVM 有针对不同系统的特定实现（Windows，Linux，macOS），目的是使用相同的字节码，它们都会给出相同的结果。字节码和不同系统的 JVM 实现是 Java 语言“一次编译，随处可以运行”的关键所在。")]),a._v(" "),v("h2",{attrs:{id:"jdk-和-jre"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#jdk-和-jre"}},[a._v("#")]),a._v(" JDK 和 JRE")]),a._v(" "),v("p",[a._v("JDK 是 Java Development Kit，它是功能齐全的 Java SDK。它拥有 JRE 所拥有的一切，还有编译器（javac）和工具（如 javadoc 和 jdb）。它能够创建和编译程序。")]),a._v(" "),v("p",[a._v("JRE 是 Java 运行时环境。它是运行已编译 Java 程序所需的所有内容的集合，包括 Java 虚拟机（JVM），Java 类库，java 命令和其他的一些基础构件。但是，它不能用于创建新程序。")]),a._v(" "),v("p",[a._v("如果你只是为了运行一下 Java 程序的话，那么你只需要安装 JRE 就可以了。如果你需要进行一些 Java 编程方面的工作，那么你就需要安装 JDK 了。但是，这不是绝对的。有时，即使您不打算在计算机上进行任何 Java 开发，仍然需要安装 JDK。")]),a._v(" "),v("p",[a._v("例如，如果要使用 JSP 部署 Web 应用程序，那么从技术上讲，您只是在应用程序服务器中运行 Java 程序。那你为什么需要 JDK 呢？因为应用程序服务器会将 JSP 转换为 Java servlet，并且需要使用 JDK 来编译 servlet。")]),a._v(" "),v("h2",{attrs:{id:"字符型常量和字符串常量的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#字符型常量和字符串常量的区别"}},[a._v("#")]),a._v(" 字符型常量和字符串常量的区别?")]),a._v(" "),v("p",[a._v("形式上: 字符常量是单引号引起的一个字符; 字符串常量是双引号引起的若干个字符\n含义上: 字符常量相当于一个整型值( ASCII 值),可以参加表达式运算; 字符串常量代表一个地址值(该字符串在内存中存放位置)\n占内存大小 字符常量只占 2 个字节; 字符串常量占若干个字节 (注意： char 在 Java 中占两个字节)")]),a._v(" "),v("h2",{attrs:{id:"在一个静态方法内调用一个非静态成员为什么是非法的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#在一个静态方法内调用一个非静态成员为什么是非法的"}},[a._v("#")]),a._v(" 在一个静态方法内调用一个非静态成员为什么是非法的?")]),a._v(" "),v("p",[a._v("由于静态方法可以不通过对象进行调用，因此在静态方法里，不能调用其他非静态变量，也不可以访问非静态变量成员。")]),a._v(" "),v("h2",{attrs:{id:"深拷贝-vs-浅拷贝"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#深拷贝-vs-浅拷贝"}},[a._v("#")]),a._v(" 深拷贝 vs 浅拷贝")]),a._v(" "),v("p",[a._v("浅拷贝：对基本数据类型进行值传递，对引用数据类型进行引用传递般的拷贝，此为浅拷贝。\n深拷贝：对基本数据类型进行值传递，对引用数据类型，创建一个新的对象，并复制其内容，此为深拷贝。")]),a._v(" "),v("h2",{attrs:{id:"在-java-中定义一个不做事且没有参数的构造方法的作用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#在-java-中定义一个不做事且没有参数的构造方法的作用"}},[a._v("#")]),a._v(" 在 Java 中定义一个不做事且没有参数的构造方法的作用")]),a._v(" "),v("p",[a._v("Java 程序在执行子类的构造方法之前，如果没有用 super()来调用父类特定的构造方法，则会调用父类中“没有参数的构造方法”。")]),a._v(" "),v("p",[a._v("因此，如果父类中只定义了有参数的构造方法，而在子类的构造方法中又没有用 super()来调用父类中特定的构造方法，则编译时将发生错误，因为 Java 程序在父类中找不到没有参数的构造方法可供执行。")]),a._v(" "),v("p",[a._v("解决办法是在父类里加上一个不做事且没有参数的构造方法。")]),a._v(" "),v("h2",{attrs:{id:"构造方法有哪些特性？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#构造方法有哪些特性？"}},[a._v("#")]),a._v(" 构造方法有哪些特性？")]),a._v(" "),v("p",[a._v("名字与类名相同。\n没有返回值，但不能用 void 声明构造函数。\n生成类的对象时自动执行，无需调用。")]),a._v(" "),v("h2",{attrs:{id:"重载和重写的区别-构造器-constructor-是否可被-override"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#重载和重写的区别-构造器-constructor-是否可被-override"}},[a._v("#")]),a._v(" 重载和重写的区别?构造器 Constructor 是否可被 override?")]),a._v(" "),v("p",[a._v("•重载： 发生在同一个类中，方法名必须相同，参数类型不同、个数不同、顺序不同，方法返回值和访问修饰符可以不同，发生在编译时。　　\n•重写： 发生在父子类中，方法名、参数列表必须相同，返回值范围小于等于父类，抛出的异常范围小于等于父类，访问修饰符范围大于等于父类；如果父类方法访问修饰符为 private 则子类就不能重写该方法。")]),a._v(" "),v("p",[a._v("在讲继承的时候我们就知道父类的私有属性和构造方法并不能被继承，所以 Constructor 也就不能被 override（重写）,但是可以 overload（重载）,所以你可以看到一个类中有多个构造函数的情况。")]),a._v(" "),v("h2",{attrs:{id:"谈谈java-面向对象编程三大特性-封装-继承-多态"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#谈谈java-面向对象编程三大特性-封装-继承-多态"}},[a._v("#")]),a._v(" 谈谈Java 面向对象编程三大特性: 封装 继承 多态")]),a._v(" "),v("p",[a._v("封装\n封装把一个对象的属性私有化，同时提供一些可以被外界访问的属性的方法，如果属性不想被外界访问，我们大可不必提供方法给外界访问。但是如果一个类没有提供给外界访问的方法，那么这个类也没有什么意义了。")]),a._v(" "),v("p",[a._v("继承\n继承是使用已存在的类的定义作为基础建立新类的技术，新类的定义可以增加新的数据或新的功能，也可以用父类的功能，但不能选择性地继承父类。通过使用继承我们能够非常方便地复用以前的代码。")]),a._v(" "),v("p",[a._v("关于继承如下 3 点请记住：")]),a._v(" "),v("p",[a._v("•子类拥有父类对象所有的属性和方法（包括私有属性和私有方法），但是父类中的私有属性和方法子类是无法访问，只是拥有。\n•子类可以拥有自己属性和方法，即子类可以对父类进行扩展。\n•子类可以用自己的方式实现父类的方法。（以后介绍）。")]),a._v(" "),v("p",[a._v("多态\n所谓多态就是指程序中定义的引用变量所指向的具体类型和通过该引用变量发出的方法调用在编程时并不确定，而是在程序运行期间才确定，即一个引用变量到底会指向哪个类的实例对象，该引用变量发出的方法调用到底是哪个类中实现的方法，必须在由程序运行期间才能决定。")]),a._v(" "),v("p",[a._v("在Java中有两种形式可以实现多态：继承（多个子类对同一方法的重写）和接口（实现接口并覆盖接口中同一方法）。")]),a._v(" "),v("h2",{attrs:{id:"接口和抽象类的区别是什么？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#接口和抽象类的区别是什么？"}},[a._v("#")]),a._v(" 接口和抽象类的区别是什么？")]),a._v(" "),v("p",[a._v("•接口的方法默认是 public，所有方法在接口中不能有实现(Java 8 开始接口方法可以有默认实现），而抽象类可以有非抽象的方法。\n•接口中的实例变量默认是 final 类型的，而抽象类中则不一定。\n•一个类可以实现多个接口，但最多只能实现一个抽象类。\n•一个类实现接口的话要实现接口的所有方法，而抽象类不一定。\n•接口不能用 new 实例化，但可以声明，但是必须引用一个实现该接口的对象。从设计层面来说，抽象是对类的抽象，是一种模板设计，而接口是对行为的抽象，是一种行为的规范。")]),a._v(" "),v("p",[a._v("备注:在JDK8中，接口也可以定义静态方法，可以直接用接口名调用。实现类和实现是不可以调用的。如果同时实现两个接口，接口中定义了一样的默认方法，则必须重写，不然会报错。")]),a._v(" "),v("h2",{attrs:{id:"抽象类必须要有抽象方法吗？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#抽象类必须要有抽象方法吗？"}},[a._v("#")]),a._v(" 抽象类必须要有抽象方法吗？")]),a._v(" "),v("p",[a._v("抽象类中不一定包含抽象方法，但是包含抽象方法的类一定要被声明为抽象类。")]),a._v(" "),v("h2",{attrs:{id:"抽象类能使用-final-修饰吗？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#抽象类能使用-final-修饰吗？"}},[a._v("#")]),a._v(" 抽象类能使用 final 修饰吗？")]),a._v(" "),v("p",[a._v("抽象类不能用final来修饰。当用final修饰一个类时，表明这个类不能被继承。final类中的所有成员方法都会被隐式地指定为final方法，这明显违背了抽象类存在的意义了。")]),a._v(" "),v("h2",{attrs:{id:"与-equals-重要"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#与-equals-重要"}},[a._v("#")]),a._v(" == 与 equals(重要)")]),a._v(" "),v("p",[a._v("== : 它的作用是判断两个对象的地址是不是相等。即，判断两个对象是不是同一个对象(基本数据类型==比较的是值，引用数据类型==比较的是内存地址)。")]),a._v(" "),v("p",[a._v("equals() : 它的作用也是判断两个对象是否相等。但它一般有两种使用情况：")]),a._v(" "),v("p",[a._v("•情况1：类没有覆盖 equals() 方法。则通过 equals() 比较该类的两个对象时，等价于通过“==”比较这两个对象。\n•情况2：类覆盖了 equals() 方法。一般，我们都覆盖 equals() 方法来两个对象的内容相等；若它们的内容相等，则返回 true (即，认为这两个对象相等)。")]),a._v(" "),v("h2",{attrs:{id:"什么是反射机制？反射机制的应用场景有哪些？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是反射机制？反射机制的应用场景有哪些？"}},[a._v("#")]),a._v(" 什么是反射机制？反射机制的应用场景有哪些？")]),a._v(" "),v("p",[a._v("反射机制介绍\nJAVA反射机制是在运行状态中，对于任意一个类，都能够知道这个类的所有属性和方法；对于任意一个对象，都能够调用它的任意一个方法和属性；这种动态获取的信息以及动态调用对象的方法的功能称为java语言的反射机制。")]),a._v(" "),v("p",[a._v("静态编译和动态编译\n•静态编译：在编译时确定类型，绑定对象\n•动态编译：运行时确定类型，绑定对象")]),a._v(" "),v("p",[a._v("反射机制优缺点\n•优点： 运行期类型的判断，动态加载类，提高代码灵活度。\n•缺点： 性能瓶颈：反射相当于一系列解释操作，通知 JVM 要做的事情，性能比直接的java代码要慢很多。")]),a._v(" "),v("p",[a._v("反射的应用场景\n反射是框架设计的灵魂。")]),a._v(" "),v("p",[a._v("在我们平时的项目开发过程中，基本上很少会直接使用到反射机制，但这不能说明反射机制没有用，实际上有很多设计、开发都与反射机制有关，例如模块化的开发，通过反射去调用对应的字节码；动态代理设计模式也采用了反射机制，还有我们日常使用的 Spring／Hibernate 等框架也大量使用到了反射机制。")]),a._v(" "),v("p",[a._v("举例：①我们在使用JDBC连接数据库时使用Class.forName()通过反射加载数据库的驱动程序；②Spring框架也用到很多反射机制，最经典的就是xml的配置模式。Spring 通过 XML 配置模式装载 Bean 的过程：1) 将程序内所有 XML 或 Properties 配置文件加载入内存中; 2)Java类里面解析xml或properties里面的内容，得到对应实体类的字节码字符串以及相关的属性信息; 3)使用反射机制，根据这个字符串获得某个类的Class实例; 4)动态配置实例的属性")]),a._v(" "),v("h2",{attrs:{id:"为什么-java-中只有值传递？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么-java-中只有值传递？"}},[a._v("#")]),a._v(" 为什么 Java 中只有值传递？")]),a._v(" "),v("p",[a._v("首先回顾一下在程序设计语言中有关将参数传递给方法（或函数）的一些专业术语。按值调用(call by value)表示方法接收的是调用者提供的值，而按引用调用（call by reference)表示方法接收的是调用者提供的变量地址。一个方法可以修改传递引用所对应的变量值，而不能修改传递值调用所对应的变量值。 它用来描述各种程序设计语言（不只是Java)中方法参数传递方式。")]),a._v(" "),v("p",[a._v("Java程序设计语言总是采用按值调用。也就是说，方法得到的是所有参数值的一个拷贝，也就是说，方法不能修改传递给它的任何参数变量的内容。")]),a._v(" "),v("p",[a._v("实现一个改变对象参数状态的方法并不是一件难事。理由很简单，方法得到的是对象引用的拷贝，对象引用及其他的拷贝同时引用同一个对象。")]),a._v(" "),v("p",[a._v("很多程序设计语言（特别是，C++和Pascal)提供了两种参数传递的方式：值调用和引用调用。有些程序员（甚至本书的作者）认为Java程序设计语言对对象采用的是引用调用，实际上，这种理解是不对的。")]),a._v(" "),v("p",[a._v("Java程序设计语言对对象采用的不是引用调用，实际上，对象引用是按 值传递的。")]),a._v(" "),v("p",[a._v("下面再总结一下Java中方法参数的使用情况：")]),a._v(" "),v("p",[a._v("•一个方法不能修改一个基本数据类型的参数（即数值型或布尔型）。\n•一个方法可以改变一个对象参数的状态。\n•一个方法不能让对象参数引用一个新的对象。")]),a._v(" "),v("h2",{attrs:{id:"java-中-io-流分为几种？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#java-中-io-流分为几种？"}},[a._v("#")]),a._v(" Java 中 IO 流分为几种？")]),a._v(" "),v("p",[a._v("java 中 IO 流分为几种？\n•按照流的流向分，可以分为输入流和输出流；\n•按照操作单元划分，可以划分为字节流和字符流；\n•按照流的角色划分为节点流和处理流。")]),a._v(" "),v("p",[a._v("Java Io流共涉及40多个类，这些类看上去很杂乱，但实际上很有规则，而且彼此之间存在非常紧密的联系， Java I0流的40多个类都是从如下4个抽象类基类中派生出来的。")]),a._v(" "),v("p",[a._v("•InputStream/Reader: 所有的输入流的基类，前者是字节输入流，后者是字符输入流。\n•OutputStream/Writer: 所有输出流的基类，前者是字节输出流，后者是字符输出流。")]),a._v(" "),v("h2",{attrs:{id:"bio-nio-aio-有什么区别？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#bio-nio-aio-有什么区别？"}},[a._v("#")]),a._v(" BIO,NIO,AIO 有什么区别？")]),a._v(" "),v("p",[a._v("•BIO (Blocking I/O): 同步阻塞I/O模式，数据的读取写入必须阻塞在一个线程内等待其完成。在活动连接数不是特别高（小于单机1000）的情况下，这种模型是比较不错的，可以让每一个连接专注于自己的 I/O 并且编程模型简单，也不用过多考虑系统的过载、限流等问题。线程池本身就是一个天然的漏斗，可以缓冲一些系统处理不了的连接或请求。但是，当面对十万甚至百万级连接的时候，传统的 BIO 模型是无能为力的。因此，我们需要一种更高效的 I/O 处理模型来应对更高的并发量。\n•NIO (New I/O): NIO是一种同步非阻塞的I/O模型，在Java 1.4 中引入了NIO框架，对应 java.nio 包，提供了 Channel , Selector，Buffer等抽象。NIO中的N可以理解为Non-blocking，不单纯是New。它支持面向缓冲的，基于通道的I/O操作方法。NIO提供了与传统BIO模型中的 Socket 和 ServerSocket 相对应的 SocketChannel 和 ServerSocketChannel 两种不同的套接字通道实现,两种通道都支持阻塞和非阻塞两种模式。阻塞模式使用就像传统中的支持一样，比较简单，但是性能和可靠性都不好；非阻塞模式正好与之相反。对于低负载、低并发的应用程序，可以使用同步阻塞I/O来提升开发速率和更好的维护性；对于高负载、高并发的（网络）应用，应使用 NIO 的非阻塞模式来开发\n•AIO (Asynchronous I/O): AIO 也就是 NIO 2。在 Java 7 中引入了 NIO 的改进版 NIO 2,它是异步非阻塞的IO模型。异步 IO 是基于事件和回调机制实现的，也就是应用操作之后会直接返回，不会堵塞在那里，当后台处理完成，操作系统会通知相应的线程进行后续的操作。AIO 是异步IO的缩写，虽然 NIO 在网络操作中，提供了非阻塞的方法，但是 NIO 的 IO 行为还是同步的。对于 NIO 来说，我们的业务线程是在 IO 操作准备好时，得到通知，接着就由这个线程自行进行 IO 操作，IO操作本身是同步的。查阅网上相关资料，我发现就目前来说 AIO 的应用还不是很广泛，Netty 之前也尝试使用过 AIO，不过又放弃了。")]),a._v(" "),v("h2",{attrs:{id:"说说list-set-map三者的区别？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#说说list-set-map三者的区别？"}},[a._v("#")]),a._v(" 说说List,Set,Map三者的区别？")]),a._v(" "),v("ul",[v("li",[a._v("List(对付顺序的好帮手)： List接口存储一组不唯一（可以有多个元素引用相同的对象），有序的对象")]),a._v(" "),v("li",[a._v("Set(注重独一无二的性质): 不允许重复的集合。不会有多个元素引用相同的对象。")]),a._v(" "),v("li",[a._v("Map(用Key来搜索的专家): 使用键值对存储。Map会维护与Key有关联的值。两个Key可以引用相同的对象，但Key不能重复，典型的Key是String类型，但也可以是任何对象。")])]),a._v(" "),v("h2",{attrs:{id:"arraylist-与-vector-区别呢-为什么要用arraylist取代vector呢？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#arraylist-与-vector-区别呢-为什么要用arraylist取代vector呢？"}},[a._v("#")]),a._v(" ArrayList 与 Vector 区别呢?为什么要用Arraylist取代Vector呢？")]),a._v(" "),v("p",[a._v("Vector类的所有方法都是同步的。可以由两个线程安全地访问一个Vector对象、但是一个线程访问Vector的话代码要在同步操作上耗费大量的时间。")]),a._v(" "),v("p",[a._v("Arraylist不是同步的，所以在不需要保证线程安全时建议使用Arraylist。")]),a._v(" "),v("h2",{attrs:{id:"hashmap-多线程操作导致死循环问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#hashmap-多线程操作导致死循环问题"}},[a._v("#")]),a._v(" HashMap 多线程操作导致死循环问题")]),a._v(" "),v("p",[a._v("主要原因在于并发下的Rehash 会造成元素之间会形成一个循环链表。不过，jdk 1.8 后解决了这个问题，但是还是不建议在多线程下使用 HashMap,因为多线程下使用 HashMap 还是会存在其他问题比如数据丢失。并发环境下推荐使用 ConcurrentHashMap 。")]),a._v(" "),v("h2",{attrs:{id:"实现最小值函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#实现最小值函数"}},[a._v("#")]),a._v(" 实现最小值函数")]),a._v(" "),v("p",[a._v("自己设计一个泛型的获取数组最小值的函数.并且这个方法只能接受Number的子类并且实现了Comparable接口。")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v('//注意：Number并没有实现Comparable\nprivate static <T extends Number & Comparable<? super T>> T min(T[] values) {\n    if (values == null || values.length == 0) return null;\n    T min = values[0];\n    for (int i = 1; i < values.length; i++) {\n        if (min.compareTo(values[i]) > 0) min = values[i];\n    }\n    return min;\n}\n\nint minInteger = min(new Integer[]{1, 2, 3});//result:1\ndouble minDouble = min(new Double[]{1.2, 2.2, -1d});//result:-1d\nString typeError = min(new String[]{"1","3"});//报错\n')])])]),v("h2",{attrs:{id:"使用数组实现栈"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用数组实现栈"}},[a._v("#")]),a._v(" 使用数组实现栈")]),a._v(" "),v("p",[a._v("自己实现一个栈，要求这个栈具有push()、pop()（返回栈顶元素并出栈）、peek() （返回栈顶元素不出栈）、isEmpty()、size()这些基本的方法。")]),a._v(" "),v("p",[a._v("提示：每次入栈之前先判断栈的容量是否够用，如果不够用就用Arrays.copyOf()进行扩容；")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v('public class MyStack {\n    private int[] storage;//存放栈中元素的数组\n    private int capacity;//栈的容量\n    private int count;//栈中元素数量\n    private static final int GROW_FACTOR = 2;\n\n    //TODO：不带初始容量的构造方法。默认容量为8\n    public MyStack() {\n        this.capacity = 8;\n        this.storage=new int[8];\n        this.count = 0;\n    }\n\n    //TODO：带初始容量的构造方法\n    public MyStack(int initialCapacity) {\n        if (initialCapacity < 1)\n            throw new IllegalArgumentException("Capacity too small.");\n\n        this.capacity = initialCapacity;\n        this.storage = new int[initialCapacity];\n        this.count = 0;\n    }\n\n    //TODO：入栈\n    public void push(int value) {\n        if (count == capacity) {\n            ensureCapacity();\n        }\n        storage[count++] = value;\n    }\n\n    //TODO：确保容量大小\n    private void ensureCapacity() {\n        int newCapacity = capacity * GROW_FACTOR;\n        storage = Arrays.copyOf(storage, newCapacity);\n        capacity = newCapacity;\n    }\n\n    //TODO：返回栈顶元素并出栈\n    private int pop() {\n        if (count == 0)\n            throw new IllegalArgumentException("Stack is empty.");\n        count--;\n        return storage[count];\n    }\n\n    //TODO：返回栈顶元素不出栈\n    private int peek() {\n        if (count == 0){\n            throw new IllegalArgumentException("Stack is empty.");\n        }else {\n            return storage[count-1];\n        }\n    }\n\n    //TODO：判断栈是否为空\n    private boolean isEmpty() {\n        return count == 0;\n    }\n\n    //TODO：返回栈中元素的个数\n    private int size() {\n        return count;\n    }\n\n}\n\nMyStack myStack = new MyStack(3);\nmyStack.push(1);\nmyStack.push(2);\nmyStack.push(3);\nmyStack.push(4);\nmyStack.push(5);\nmyStack.push(6);\nmyStack.push(7);\nmyStack.push(8);\nSystem.out.println(myStack.peek());//8\nSystem.out.println(myStack.size());//8\nfor (int i = 0; i < 8; i++) {\n    System.out.println(myStack.pop());\n}\nSystem.out.println(myStack.isEmpty());//true\nmyStack.pop();//报错：java.lang.IllegalArgumentException: Stack is empty.\n')])])])])}),[],!1,null,null,null);t.default=e.exports}}]);