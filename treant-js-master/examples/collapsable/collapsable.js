//use carName cookie to extract the details of that particular car
    var chart_config = {
        chart: {
            container: "#collapsable-example",

            animateOnInit: true,

            node: {
                collapsable: true
            },
            animation: {
                nodeAnimation: "easeOutBounce",
                nodeSpeed: 700,
                connectorsAnimation: "bounce",
                connectorsSpeed: 700
            }
        },
        nodeStructure: {
            image: "img/malory.png",
            children: [
                {
                    image: "img/lana.png",
                    collapsed: true,
                    children: [
                        {
                            image: "img/figgs.png"
                        }
                    ]
                },
                {
                    image: "img/sterling.png",
                    collapsed: true,
                    children: [
                        {
                            image: "img/woodhouse.png"
                        }
                    ]
                },
                {
                    children: [
                        {
                            image: "img/cheryl.png"
                        },
                        {
                            image: "img/pam.png"
                        }
                    ]
                }
            ]
        }
    };
