from drf_standardized_errors import ExceptionFormatter
from drf_standardized_errors import ErrorResponse

class MyExceptionFormatter(ExceptionFormatter):
    def form_error_response(self,error_response:ErrorResponse):
        error = error_response.error[0]

        if error_respose.type =="validation_error" and error.attr != 'non_field_error' and error.attr is not None:
            error_message = f"{error.attr}:{error:detail}"

        else:
            error_message = error_detail

        return {
            "success": False,
            "Type":error_response.type,
            "code":error.code,
            "error":error_message
        }