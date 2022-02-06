export namespace RunnerApiSubmitRequest {
  export const path = "/submit"
  export interface Body {
    source: string
  }
}

export namespace RunnerApiSubmitResponse {
  export interface Body {
    result: {
      stdout: string
      stderr: string
    }
  }
}
