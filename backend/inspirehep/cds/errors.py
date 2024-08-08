#
# Copyright (C) 2021 CERN.
#
# inspirehep is free software; you can redistribute it and/or modify it under
# the terms of the MIT License; see LICENSE file for more details.


class CDSSyncError(Exception):
    pass


class MissingCDSServerConfig(CDSSyncError):
    pass


class WrongDateFormat(CDSSyncError):
    pass
