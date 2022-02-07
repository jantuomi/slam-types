export namespace RunnerApi {
  export namespace SubmitRequest {
    export const path = "/submit"
    export interface Body {
      source: string
    }
  }

  export namespace SubmitResponse {
    export interface Body {
      result: string
    }
  }
}

export namespace ExampleApi {
  export interface Example {
    id: string
    title: string
    content: string
  }

  export namespace ListRequest {
    export const path = "/"
  }

  export namespace ListResponse {
    export interface Body {
      examples: Example[]
    }
  }
}
