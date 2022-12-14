// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(name) {
  // [START bigquerystorage_v1beta2_generated_BigQueryRead_SplitReadStream_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Name of the stream to split.
   */
  // const name = 'abc123'
  /**
   *  A value in the range (0.0, 1.0) that specifies the fractional point at
   *  which the original stream should be split. The actual split point is
   *  evaluated on pre-filtered rows, so if a filter is provided, then there is
   *  no guarantee that the division of the rows between the new child streams
   *  will be proportional to this fractional value. Additionally, because the
   *  server-side unit for assigning data is collections of rows, this fraction
   *  will always map to a data storage boundary on the server side.
   */
  // const fraction = 1234

  // Imports the Storage library
  const {BigQueryReadClient} = require('storage').v1beta2;

  // Instantiates a client
  const storageClient = new BigQueryReadClient();

  async function callSplitReadStream() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await storageClient.splitReadStream(request);
    console.log(response);
  }

  callSplitReadStream();
  // [END bigquerystorage_v1beta2_generated_BigQueryRead_SplitReadStream_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));