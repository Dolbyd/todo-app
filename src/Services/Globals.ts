class Globals{
}

class DevelopmentGlobals extends Globals{
    public urls = {
        tasks: "http://localhost:8080/api/tasks/",
        
    }
}

class ProductionGlobals extends Globals{
    public urls = {
        tasks: "www.aws.com/dolbydWebSite/tasks",
        
    }
}

const globals = process.env.NODE_ENV === 'production' ? new ProductionGlobals : new DevelopmentGlobals;

export default globals;