class BaseController {
    createdResponse(res, message) {
        res.status(201)
            .json({
                message,
                success: true,
            });
    }

    okResponse(res, data, message) {
        res.status(200)
            .json({
                data,
                message,
                success: true,
            });
    }
    
    ServerErrorResponse(res, err) {
        res.status(500)
            .json({
                errorMessage: err.message,
                success: false
            })
    }

}

export default BaseController;